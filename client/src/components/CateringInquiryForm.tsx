import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

/**
 * Catering Inquiry Form Component
 * Captures essential event details for custom catering quotes
 * Design: Warm, approachable form matching brand aesthetic
 */

export default function CateringInquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    budget: "",
    dietaryRequirements: "",
    specialRequests: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.eventType ||
      !formData.eventDate ||
      !formData.guestCount
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/catering-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
        }),
      });

      const result = await response.json();

      if (!response.ok || result?.success !== true) {
        throw new Error(result?.error || "Unable to submit inquiry");
      }

      setIsSubmitted(true);
      toast.success("Inquiry submitted! We will follow up shortly.");

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventType: "",
          eventDate: "",
          guestCount: "",
          budget: "",
          dietaryRequirements: "",
          specialRequests: "",
        });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Error submitting form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-bold text-primary mb-2">Thank You!</h3>
        <p className="text-muted-foreground">
          Your inquiry has been submitted. WhatsApp is opening to send your details.
          I'll get back to you soon with a personalized quote!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contact Information */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(902) 555-0123"
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Event Type <span className="text-red-500">*</span>
          </label>
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            required
          >
            <option value="">Select an event type</option>
            <option value="Wedding">Wedding</option>
            <option value="Birthday Party">Birthday Party</option>
            <option value="Corporate Event">Corporate Event</option>
            <option value="Graduation">Graduation</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Brazilian Celebration">Brazilian Celebration</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Event Details */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Event Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Number of Guests <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="guestCount"
            value={formData.guestCount}
            onChange={handleChange}
            placeholder="50"
            min="1"
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Budget Range
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
          >
            <option value="">Select budget range</option>
            <option value="$200-500">$200 - $500</option>
            <option value="$500-1000">$500 - $1,000</option>
            <option value="$1000-2000">$1,000 - $2,000</option>
            <option value="$2000+">$2,000+</option>
          </select>
        </div>
      </div>

      {/* Special Requirements */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Dietary Requirements or Allergies
        </label>
        <textarea
          name="dietaryRequirements"
          value={formData.dietaryRequirements}
          onChange={handleChange}
          placeholder="e.g., Gluten-free, Nut allergies, Vegan options needed..."
          rows={3}
          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Special Requests or Additional Notes
        </label>
        <textarea
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          placeholder="Tell me about your vision! Theme, color preferences, specific flavors you'd like..."
          rows={4}
          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-colors"
      >
        {isSubmitting ? (
          "Submitting..."
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Send Inquiry
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        <span className="text-red-500">*</span> Required fields
      </p>
    </form>
  );
}
