import { useAuth } from "@/_core/hooks/useAuth";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { trpc } from "@/lib/trpc";
import { Download, Loader2 } from "lucide-react";
import { useState } from "react";

export default function AdminDashboard() {
  const { user, loading: authLoading } = useAuth();
  const [selectedTab, setSelectedTab] = useState<"leads">("leads");

  // Fetch all leads
  const { data: leads, isLoading: leadsLoading, error: leadsError } = trpc.leads.getAll.useQuery();

  if (authLoading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="border-b">
          <div className="flex items-center justify-between p-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Manage and track all submitted leads
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b px-6">
          <div className="flex gap-4">
            <button
              onClick={() => setSelectedTab("leads")}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                selectedTab === "leads"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Leads ({leads?.length || 0})
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          {selectedTab === "leads" && (
            <div className="space-y-4">
              {/* Leads Table */}
              <div className="rounded-lg border bg-card">
                {leadsLoading ? (
                  <div className="flex items-center justify-center p-8">
                    <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                  </div>
                ) : leadsError ? (
                  <div className="p-8 text-center">
                    <p className="text-red-500 font-medium">Failed to load leads</p>
                    <p className="text-sm text-muted-foreground mt-1">{leadsError.message}</p>
                  </div>
                ) : !leads || leads.length === 0 ? (
                  <div className="p-8 text-center">
                    <p className="text-muted-foreground font-medium">No leads yet</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Leads will appear here when users submit the form
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="hover:bg-transparent">
                          <TableHead className="font-semibold">Name</TableHead>
                          <TableHead className="font-semibold">Email</TableHead>
                          <TableHead className="font-semibold">Mobile</TableHead>
                          <TableHead className="font-semibold">Company</TableHead>
                          <TableHead className="font-semibold">Designation</TableHead>
                          <TableHead className="font-semibold">Lead Magnet</TableHead>
                          <TableHead className="font-semibold">Submitted</TableHead>
                          <TableHead className="font-semibold text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {leads.map((lead) => (
                          <TableRow key={lead.id} className="hover:bg-muted/50">
                            <TableCell className="font-medium">{lead.name}</TableCell>
                            <TableCell>
                              <a
                                href={`mailto:${lead.email}`}
                                className="text-primary hover:underline"
                              >
                                {lead.email}
                              </a>
                            </TableCell>
                            <TableCell>
                              <a
                                href={`tel:${lead.mobile}`}
                                className="text-primary hover:underline"
                              >
                                {lead.mobile}
                              </a>
                            </TableCell>
                            <TableCell>{lead.companyName}</TableCell>
                            <TableCell>{lead.designation}</TableCell>
                            <TableCell>
                              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                                {lead.leadMagnetType === "ceo-intel-alerts-guide"
                                  ? "CEO Intel Alerts"
                                  : lead.leadMagnetType}
                              </span>
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              {lead.createdAt
                                ? new Date(lead.createdAt).toLocaleDateString("en-IN", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })
                                : "N/A"}
                            </TableCell>
                            <TableCell className="text-right">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  // Copy lead details to clipboard
                                  const details = `Name: ${lead.name}\nEmail: ${lead.email}\nMobile: ${lead.mobile}\nCompany: ${lead.companyName}\nDesignation: ${lead.designation}`;
                                  navigator.clipboard.writeText(details);
                                }}
                                title="Copy details"
                              >
                                <Download className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </div>

              {/* Summary Stats */}
              {leads && leads.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="rounded-lg border bg-card p-4">
                    <p className="text-sm text-muted-foreground font-medium">Total Leads</p>
                    <p className="text-2xl font-bold mt-2">{leads.length}</p>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <p className="text-sm text-muted-foreground font-medium">Latest Submission</p>
                    <p className="text-sm font-medium mt-2">
                      {leads.length > 0 && leads[leads.length - 1].createdAt
                        ? new Date(leads[leads.length - 1].createdAt).toLocaleDateString("en-IN")
                        : "N/A"}
                    </p>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <p className="text-sm text-muted-foreground font-medium">Lead Magnet</p>
                    <p className="text-sm font-medium mt-2">CEO Intel Alerts Guide</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
