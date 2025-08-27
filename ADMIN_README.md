# Admin Dashboard for RASM Team

This admin dashboard allows you to view and manage contact form submissions and newsletter subscribers.

## Features

### Contact Form Submissions

- View all contact form submissions with timestamps
- See sender name, email, and message preview
- Click "View" to see full message details in a modal
- Messages are automatically saved with creation date/time

### Newsletter Subscribers

- View all newsletter email subscriptions
- See subscription dates
- Simple list format for easy management

## How It Works

### Data Storage

- **Contact submissions**: Stored in `content/contact-submissions.json`
- **Newsletter subscribers**: Stored in `content/newsletter-subscribers.json`
- Each entry includes a `createdAt` timestamp in ISO format

### API Endpoints

- `POST /api/contact` - Saves contact form submissions
- `GET /api/contact` - Retrieves all contact submissions
- `POST /api/newsletter` - Saves newsletter subscriptions
- `GET /api/newsletter` - Retrieves all newsletter subscribers

### Admin Access

- Navigate to `/admin` to access the dashboard
- Currently accessible via a small link in the footer (remove in production)

## File Structure

```
rasm/
├── app/
│   ├── admin/
│   │   ├── page.js          # Admin page route
│   │   └── AdminClient.jsx  # Admin dashboard component
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.js     # Contact API endpoints
│   │   └── newsletter/
│   │       └── route.js     # Newsletter API endpoints
│   └── components/
│       └── Footer.jsx       # Footer with forms
├── content/
│   ├── contact-submissions.json    # Contact data storage
│   └── newsletter-subscribers.json # Newsletter data storage
└── styles/
    └── admin.module.css     # Admin dashboard styles
```

## Usage

1. **Contact Form**: Users fill out the contact form in the footer
   - Name, email, and message are required
   - Data is automatically saved with timestamp

2. **Newsletter**: Users enter their email in the newsletter section
   - Email is required
   - Subscription is automatically saved with timestamp

3. **Admin Dashboard**: Access `/admin` to view all submissions
   - Switch between contact and newsletter tabs
   - View message details by clicking "View" button
   - All data is displayed with formatted dates

## Security Notes

- **Remove admin link**: The admin link in the footer should be removed before production
- **Access control**: Consider adding authentication to the admin page
- **Data validation**: Input validation is handled on both client and server side

## Styling

The admin dashboard uses a modern, responsive design with:

- Clean card-based layout
- Tab navigation
- Modal for detailed message viewing
- Mobile-responsive design
- Consistent with RASM Team's design aesthetic

## Future Enhancements

- Add authentication system
- Implement message status tracking (read/unread)
- Add export functionality for data
- Implement search and filtering
- Add bulk actions for managing submissions
