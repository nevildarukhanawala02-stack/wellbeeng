import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertCircle, CheckCircle2, Loader2, Download } from 'lucide-react';
import { trpc } from '@/lib/trpc';

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
  leadMagnetTitle: string;
  leadMagnetDescription: string;
}

export function LeadMagnetModal({
  isOpen,
  onClose,
  leadMagnetTitle,
  leadMagnetDescription,
}: LeadMagnetModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    companyName: '',
    designation: '',
    website: '', // honeypot: real users never see/fill this; bots often do
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  // Use tRPC mutation for lead submission
  const submitLeadMutation = trpc.leads.submit.useMutation();

  // Validate form fields
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[0-9\-\+\s]{10,}$/.test(formData.mobile.trim())) {
      newErrors.mobile = 'Please enter a valid mobile number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.designation.trim()) {
      newErrors.designation = 'Designation is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle field blur for real-time validation
  const handleBlur = (field: string) => {
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await submitLeadMutation.mutateAsync({
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email,
        companyName: formData.companyName,
        designation: formData.designation,
        website: formData.website,
      });

      setShowSuccess(true);
      setFormData({
        name: '',
        mobile: '',
        email: '',
        companyName: '',
        designation: '',
        website: '',
      });

      // Auto-close after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Failed to submit lead:', error);
      setErrors({ submit: 'Failed to submit form. Please try again.' });
    }
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-slate-950 border border-cyan-400/30">
        <DialogHeader>
          <DialogTitle className="text-white text-xl">{leadMagnetTitle}</DialogTitle>
          <DialogDescription className="text-gray-400 mt-2">
            {leadMagnetDescription}
          </DialogDescription>
        </DialogHeader>

        {!showSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            {/* Honeypot field — hidden from real users via off-screen
                positioning (not display:none, which some bots detect and
                skip). Left name/id look legitimate to lure bots. */}
            <div
              aria-hidden="true"
              style={{ position: 'absolute', left: '-9999px', top: '-9999px', height: 0, width: 0, overflow: 'hidden' }}
            >
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Full Name <span className="text-orange-500">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={() => handleBlur('name')}
                placeholder="Enter your full name"
                className={`bg-slate-900 border ${
                  errors.name ? 'border-red-500' : 'border-cyan-400/30'
                } text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none`}
              />
              {errors.name && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle size={16} />
                  {errors.name}
                </div>
              )}
            </div>

            {/* Mobile Field */}
            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-white">
                Mobile Number <span className="text-orange-500">*</span>
              </Label>
              <Input
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                onBlur={() => handleBlur('mobile')}
                placeholder="Enter your mobile number"
                className={`bg-slate-900 border ${
                  errors.mobile ? 'border-red-500' : 'border-cyan-400/30'
                } text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none`}
              />
              {errors.mobile && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle size={16} />
                  {errors.mobile}
                </div>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email <span className="text-orange-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur('email')}
                placeholder="Enter your email"
                className={`bg-slate-900 border ${
                  errors.email ? 'border-red-500' : 'border-cyan-400/30'
                } text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none`}
              />
              {errors.email && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle size={16} />
                  {errors.email}
                </div>
              )}
            </div>

            {/* Company Name Field */}
            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-white">
                Company Name <span className="text-orange-500">*</span>
              </Label>
              <Input
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                onBlur={() => handleBlur('companyName')}
                placeholder="Enter your company name"
                className={`bg-slate-900 border ${
                  errors.companyName ? 'border-red-500' : 'border-cyan-400/30'
                } text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none`}
              />
              {errors.companyName && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle size={16} />
                  {errors.companyName}
                </div>
              )}
            </div>

            {/* Designation Field */}
            <div className="space-y-2">
              <Label htmlFor="designation" className="text-white">
                Designation <span className="text-orange-500">*</span>
              </Label>
              <Input
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                onBlur={() => handleBlur('designation')}
                placeholder="Enter your designation"
                className={`bg-slate-900 border ${
                  errors.designation ? 'border-red-500' : 'border-cyan-400/30'
                } text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none`}
              />
              {errors.designation && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle size={16} />
                  {errors.designation}
                </div>
              )}
            </div>

            {/* Submit Error */}
            {errors.submit && (
              <div className="flex items-center gap-2 text-red-500 text-sm p-3 bg-red-500/10 rounded border border-red-500/30">
                <AlertCircle size={16} />
                {errors.submit}
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={submitLeadMutation.isPending}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-colors mt-6"
            >
              {submitLeadMutation.isPending ? (
                <>
                  <Loader2 size={16} className="mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Download Guide'
              )}
            </Button>
          </form>
        ) : (
          // Success Message
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="bg-green-500/20 text-green-400 rounded-full p-3">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-xl font-bold text-white">Thank You!</h3>
            <p className="text-gray-400 text-center">
              Your CEO Intel Alerts Guide has been sent to <span className="text-cyan-400">{formData.email}</span>
            </p>
            <p className="text-gray-500 text-sm text-center">
              We've sent the guide to your email. Check your inbox for the CEO Intel Alerts Guide and insights on early-warning alerts.
            </p>
            <a
              href="/resources/CEO_Intel_Alerts_Guide_Cleaned_Final_464b070e.pdf"
              download="CEO_Intel_Alerts_Guide.pdf"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
            >
              <Download size={18} />
              Download Guide Now
            </a>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
