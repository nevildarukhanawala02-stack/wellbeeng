import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createLead } from './db';
import { appRouter } from './routers';

// Mock the database module
vi.mock('./db', () => ({
  createLead: vi.fn(),
  getDb: vi.fn(),
  upsertUser: vi.fn(),
  getUserByOpenId: vi.fn(),
}));

// Mock the email module
vi.mock('./_core/email', () => ({
  sendEmail: vi.fn().mockResolvedValue(true),
  generateLeadMagnetEmailTemplate: vi.fn().mockReturnValue('<html>test</html>'),
  generateAdminNotificationTemplate: vi.fn().mockReturnValue('<html>admin test</html>'),
}));

describe('leads.submit', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should successfully submit a lead with valid data', async () => {
    // Mock the createLead function to resolve successfully
    (createLead as any).mockResolvedValueOnce(undefined);

    const caller = appRouter.createCaller({
      user: null,
      req: {
        protocol: 'https',
        get: (header: string) => header === 'host' ? 'wellbeeng.com' : undefined,
      } as any,
      res: {} as any,
    });

    const result = await caller.leads.submit({
      name: 'John Doe',
      mobile: '9876543210',
      email: 'john@example.com',
      companyName: 'Acme Corp',
      designation: 'CEO',
    });

    expect(result.success).toBe(true);
    expect(result.message).toBe('Lead submitted successfully');
    expect(result.emailSent).toBe(true);
    expect(createLead).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'John Doe',
        mobile: '9876543210',
        email: 'john@example.com',
        companyName: 'Acme Corp',
        designation: 'CEO',
        leadMagnetType: 'ceo-intel-alerts-guide',
      })
    );
  });

  it('should reject lead submission with invalid name', async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {
        protocol: 'https',
        get: (header: string) => header === 'host' ? 'wellbeeng.com' : undefined,
      } as any,
      res: {} as any,
    });

    await expect(
      caller.leads.submit({
        name: 'J', // Too short
        mobile: '9876543210',
        email: 'john@example.com',
        companyName: 'Acme Corp',
        designation: 'CEO',
      })
    ).rejects.toThrow();
  });

  it('should reject lead submission with invalid email', async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {
        protocol: 'https',
        get: (header: string) => header === 'host' ? 'wellbeeng.com' : undefined,
      } as any,
      res: {} as any,
    });

    await expect(
      caller.leads.submit({
        name: 'John Doe',
        mobile: '9876543210',
        email: 'invalid-email', // Invalid email format
        companyName: 'Acme Corp',
        designation: 'CEO',
      })
    ).rejects.toThrow();
  });

  it('should reject lead submission with invalid mobile number', async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {
        protocol: 'https',
        get: (header: string) => header === 'host' ? 'wellbeeng.com' : undefined,
      } as any,
      res: {} as any,
    });

    await expect(
      caller.leads.submit({
        name: 'John Doe',
        mobile: '123', // Too short
        email: 'john@example.com',
        companyName: 'Acme Corp',
        designation: 'CEO',
      })
    ).rejects.toThrow();
  });

  it('should reject lead submission with empty company name', async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {
        protocol: 'https',
        get: (header: string) => header === 'host' ? 'wellbeeng.com' : undefined,
      } as any,
      res: {} as any,
    });

    await expect(
      caller.leads.submit({
        name: 'John Doe',
        mobile: '9876543210',
        email: 'john@example.com',
        companyName: '', // Empty
        designation: 'CEO',
      })
    ).rejects.toThrow();
  });

  it('should reject lead submission with empty designation', async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {
        protocol: 'https',
        get: (header: string) => header === 'host' ? 'wellbeeng.com' : undefined,
      } as any,
      res: {} as any,
    });

    await expect(
      caller.leads.submit({
        name: 'John Doe',
        mobile: '9876543210',
        email: 'john@example.com',
        companyName: 'Acme Corp',
        designation: '', // Empty
      })
    ).rejects.toThrow();
  });

  it('should handle database errors gracefully', async () => {
    (createLead as any).mockRejectedValueOnce(new Error('Database connection failed'));

    const caller = appRouter.createCaller({
      user: null,
      req: {
        protocol: 'https',
        get: (header: string) => header === 'host' ? 'wellbeeng.com' : undefined,
      } as any,
      res: {} as any,
    });

    await expect(
      caller.leads.submit({
        name: 'John Doe',
        mobile: '9876543210',
        email: 'john@example.com',
        companyName: 'Acme Corp',
        designation: 'CEO',
      })
    ).rejects.toThrow('Failed to submit lead. Please try again.');
  });

  it('should still create lead even if email sending fails', async () => {
    (createLead as any).mockResolvedValueOnce(undefined);

    const { sendEmail } = await import('./_core/email');
    (sendEmail as any).mockResolvedValueOnce(false); // Email sending fails

    const caller = appRouter.createCaller({
      user: null,
      req: {
        protocol: 'https',
        get: (header: string) => header === 'host' ? 'wellbeeng.com' : undefined,
      } as any,
      res: {} as any,
    });

    const result = await caller.leads.submit({
      name: 'John Doe',
      mobile: '9876543210',
      email: 'john@example.com',
      companyName: 'Acme Corp',
      designation: 'CEO',
    });

    expect(result.success).toBe(true);
    expect(result.emailSent).toBe(false);
    expect(createLead).toHaveBeenCalled();
  });
});
