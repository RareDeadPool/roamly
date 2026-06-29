import React from "react";
import Container from "../../components/layout/Container";
import PageHeader from "../../components/shared/PageHeader";
import CreateItineraryForm from "../../components/create/CreateItineraryForm";

export default function CreateItineraryPage() {
  return (
    <div className="py-10 bg-sand-100/30 min-h-screen">
      <Container>
        {/* Header */}
        <PageHeader
          title="Share Your Trip"
          description="Create a real, honest guide of your trip. Break down days, expenses, and add reality checks to protect others."
        />

        {/* Wizard Form */}
        <CreateItineraryForm />
      </Container>
    </div>
  );
}
