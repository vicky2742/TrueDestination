# TrueDestination

**TrueDestination** is a Node.js web application following the MVC architecture, using **Express.js**, **EJS** for templating, and **CSS** for styling. The app aims to provide a dynamic and visually appealing experience, with a clean separation of logic, structure, and presentation. The project is organized into controllers, models, routes, utilities, views, and public assets for easy scalability and maintenance.

---

## 🚀 Features

* **MVC project structure** for maintainability and scalability
* **Dynamic EJS templating** with reusable layouts and partials
* **Express.js routing** with clean and modular route handlers
* **Static asset management** for CSS, JS, and images
* **Environment-based configuration** for flexibility in deployment
* **Cloud configuration support** for integrations like image storage
* **Middleware integration** for authentication, logging, and error handling
* **Form validation** with schema definitions
* **Responsive design** for mobile and desktop

---

## 🛠 Tech Stack

| Component    | Technology                             |
| ------------ | -------------------------------------- |
| Runtime      | Node.js                                |
| Framework    | Express.js                             |
| Templating   | EJS                                    |
| Styling      | CSS                                    |
| Architecture | MVC Pattern                            |
| Database     | MongoDB *(optional, if used)*          |
| Deployment   | Any Node.js-supported hosting platform |

---

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/vicky2742/TrueDestination.git
   cd TrueDestination
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the project root with values like:

   ```env
   PORT=3000
   DB_URI=your_database_connection_string
   CLOUD_KEY=your_cloud_key
   SESSION_SECRET=your_secret
   ```

4. **Run the application**

   ```bash
   npm start
   ```

5. **Open in browser**
   Visit: `http://localhost:3000`

---

## 📂 Project Structure

```
TrueDestination/
├── controllers/      # Business logic
├── models/           # Database models/schemas
├── routes/           # API & page routes
├── views/            # EJS templates
├── public/           # Static assets (CSS, JS, images)
├── utils/            # Helper functions
├── app.js            # Application entry point
├── cloudConfig.js    # Cloud service configurations
├── middleware.js     # Custom middleware functions
├── schemas.js        # Validation or DB schemas
├── package.json      # Project dependencies & scripts
└── .gitignore
```

---

## 📸 Screenshots

<img width="1888" height="912" alt="image" src="https://github.com/user-attachments/assets/8692bca6-a8cc-42e3-a002-bf99c4d171f5" />


---

## 🧪 Testing

Run tests (if available) with:

```bash
npm test
```

---

## 🤝 Contributing

1. Fork the repo
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push to your branch (`git push origin feature-name`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

Created by [**Vicky**](https://github.com/vicky2742) — feel free to reach out for collaboration or questions!
