"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface BookingContextType {
  bookingOpen: boolean;
  setBookingOpen: (open: boolean) => void;
  selectedTour: string;
  setSelectedTour: (id: string) => void;
  travelDate: string;
  setTravelDate: (date: string) => void;
  travelers: number;
  setTravelers: (count: number) => void;
}

const BookingContext = createContext<BookingContextType | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travelers, setTravelers] = useState(1);

  return (
    <BookingContext.Provider
      value={{
        bookingOpen,
        setBookingOpen,
        selectedTour,
        setSelectedTour,
        travelDate,
        setTravelDate,
        travelers,
        setTravelers,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking(): BookingContextType {
  const context = useContext(BookingContext);
  if (!context) throw new Error("useBooking must be used within BookingProvider");
  return context;
}
