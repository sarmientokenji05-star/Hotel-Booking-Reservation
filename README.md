# StayEase: Hotel Booking Reservation Management System

Final React Laboratory Project. Built with React, React Router DOM, Zustand, Axios, and Tailwind CSS.
The backend is simulated with JSON Server (`db.json`).

## Run it

```bash
npm install
npm start          # runs JSON Server (port 3001) and Vite together
```

Or in two terminals:

```bash
npm run server     # http://localhost:3001
npm run dev        # http://localhost:5173
```

## Test accounts

| Role     | Email               | Password  |
|----------|---------------------|-----------|
| Admin    | admin@stayease.com  | Admin123  |
| Customer | maria@email.com     | Maria123  |
| Customer | john@email.com      | John1234  |

## Demo flow

1. Register a new customer, then log in.
2. Search rooms, open Room Details, and book a room (status: Pending).
3. Try dates that overlap an Approved booking (room 102, Dec 10-12 2026) to see the availability error.
4. Log out, log in as Admin, approve one request and reject another.
5. Add, edit, and delete a room; edit a customer.
6. Log in as the customer again to see the new status and cancel a booking.

## Rules built in

- Only two roles: `admin` and `customer`. New accounts are always customers.
- No payment, reviews, chat, notifications, or reports.
- Only **Approved** bookings block a room. Availability is checked when a request is sent and again when the admin approves.
- Customers can cancel Pending bookings, or Approved ones before check-in.
- A room with Pending/Approved bookings cannot be deleted.
- Passwords are plain text in `db.json`. This is for a school demo only.

## Folder guide

```
src/
  components/  common, layout, rooms, bookings
  pages/       public, customer, admin
  routes/      AppRoutes, ProtectedRoute (login check), RoleRoute (role check)
  store/       useAuthStore, useRoomStore, useBookingStore (Zustand)
  services/    api (Axios instance) + auth, room, booking, user services
  hooks/       useAuth, useForm
  utils/       helpers (dates, overlap check) and validators
```
