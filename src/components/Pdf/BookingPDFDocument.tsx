// BookingPDFDocument.tsx

import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';

export interface BookingData {
  movieTitle: string;
  seats: number;
  // Add other necessary data properties
}

const BookingPDFDocument: React.FC<{ data?: BookingData }> = ({ data }) => {
  if (!data) {
    // If data is not provided, return a message indicating that the data is unavailable
    return (
      <Document>
        <Page size="A4">
          <Text>Data is unavailable</Text>
        </Page>
      </Document>
    );
  }

  return (
    <Document>
      <Page size="A4">
        <Text>Movie Title: {data.movieTitle}</Text>
        <Text>Number of Seats: {data.seats}</Text>
        {/* Add other data to display in the PDF */}
      </Page>
    </Document>
  );
};

export default BookingPDFDocument;
