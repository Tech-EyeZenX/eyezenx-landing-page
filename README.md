#  **Authentication & User Management**


### **All Roles**

| Endpoint        | Method | Role Access | Description                               |
| --------------- | ------ | ----------- | ----------------------------------------- |
| `/auth/login`   | POST   | All         | Unified login (role determined by JWT)    |
| `/auth/profile` | GET    | All         | Get logged-in user profile (JWT required) |

---

### **Admin Role**

| Endpoint                         | Method | Role Access | Description                            |
| -------------------------------- | ------ | ----------- | -------------------------------------- |
| `/admin/register`                | POST   | Admin       | Register a new admin                   |
| `/admin/login`                   | POST   | Admin       | Manual login for admin                 |
| `/admin/google-login`            | POST   | Admin       | Login with Google (only if registered) |
| `/admin/google-login-with-phone` | POST   | Admin       | Google login with phone verification   |
| `/admin/logout`                  | POST   | Admin       | Logout the currently logged-in admin   |

---

### **Doctor Role**

| Endpoint                          | Method | Role Access | Description                            |
| --------------------------------- | ------ | ----------- | -------------------------------------- |
| `/doctor/register`                | POST   | Doctor      | Register a new doctor                  |
| `/doctor/login`                   | POST   | Doctor      | Manual login for doctor                |
| `/doctor/google-login`            | POST   | Doctor      | Login with Google (only if registered) |
| `/doctor/google-login-with-phone` | POST   | Doctor      | Google login with phone verification   |
| `/doctor/logout`                  | POST   | Doctor      | Logout the currently logged-in doctor  |

---

### **ShopOwner Role**

| Endpoint                              | Method | Role Access | Description                               |
| ------------------------------------- | ------ | ----------- | ----------------------------------------- |
| `/shop-owner/register`                | POST   | ShopOwner   | Register a new shop owner                 |
| `/shop-owner/login`                   | POST   | ShopOwner   | Manual login for shop owner               |
| `/shop-owner/google-login`            | POST   | ShopOwner   | Login with Google (only if registered)    |
| `/shop-owner/google-login-with-phone` | POST   | ShopOwner   | Google login with phone verification      |
| `/shop-owner/logout`                  | POST   | ShopOwner   | Logout the currently logged-in shop owner |
---

#  **Optical Shops**

### **Shop Management**
| Endpoint                  | Method | Role Access      | Description                              |
|---------------------------|--------|------------------|------------------------------------------|
| `/api/shops`              | GET    | Admin            | List all shops                           |
| `/api/shops/:id`          | GET    | Admin, ShopOwner | Get shop details (ShopOwner: self-owned) |
| `/api/shops`              | POST   | Admin            | Create new shop                          |
| `/api/shops/:id`          | PUT    | Admin            | Update shop details                      |
| `/api/shops/:id`          | DELETE | Admin            | Delete shop                              |
| `/api/shops/:id/disable`  | PATCH  | Admin            | Disable shop account                     |

### **Shop-Specific Doctors**
| Endpoint                          | Method | Role Access      | Description                              |
|-----------------------------------|--------|------------------|------------------------------------------|
| `/api/shops/:shopId/doctors`      | GET    | Admin, ShopOwner | List doctors in a shop                   |
| `/api/shops/:shopId/doctors`      | POST   | Admin, ShopOwner | Add doctor to shop                       |

---

#  **Doctors**

### **Doctor Management**
| Endpoint                        | Method | Role Access      | Description                              |
|---------------------------------|--------|------------------|------------------------------------------|
| `/api/doctors`                  | GET    | Admin            | List all doctors                         |
| `/api/doctors/:id`              | GET    | Admin, Doctor    | Get doctor details (Doctor: own profile) |
| `/api/doctors/:id`              | PUT    | Admin, Doctor    | Update doctor (Doctor: own profile)      |
| `/api/doctors/:id`              | DELETE | Admin            | Delete doctor                            |
| `/api/admin/doctors/:id/approve`| PATCH  | Admin            | Approve doctor registration              |

---

# 🧑 **Patients**

### **Patient Records**
| Endpoint                          | Method | Role Access      | Description                              |
|-----------------------------------|--------|------------------|------------------------------------------|
| `/api/patients`                   | GET    | Doctor, Shop     | List all patients                        |
| `/api/patients/:id`               | GET    | Doctor, Shop     | Get patient details                      |
| `/api/shop/patients`              | POST   | Shop             | Create patient (Shop Owner)              |
| `/api/shop/patients/:id`          | PUT    | Shop             | Update patient info                      |
| `/api/shop/patients/:id`          | DELETE | Shop             | Delete patient                           |

### **Patient Media & Analysis**
| Endpoint                                      | Method | Role Access | Description                              |
|-----------------------------------------------|--------|-------------|------------------------------------------|
| `/api/shop/patients/:id/images`               | POST   | Shop        | Upload eye images                        |
| `/api/shop/patients/:id/request-analysis`     | POST   | Shop        | Trigger AWS image analysis               |
| `/api/shop/patients/:id/aws-report`           | GET    | Shop, Doctor| Get preliminary AWS report               |

---


### **Eye Exams**
| Endpoint                          | Method | Role Access | Description                              |
|-----------------------------------|--------|-------------|------------------------------------------|
| `/api/exams`                      | POST   | Doctor      | Start new exam                           |
| `/api/patients/:id/exams`         | GET    | Doctor      | Get patient's exam history               |
| `/api/exams/:id`                  | GET    | Doctor, Admin| Get exam details                         |
| `/api/exams/:id`                  | PUT    | Doctor      | Update exam details                      |



# 📄 **Reports & Communication**

### **Report Management**
| Endpoint                          | Method | Role Access | Description                              |
|-----------------------------------|--------|-------------|------------------------------------------|
| `/api/reports`                    | GET    | Admin       | List all reports                         |
| `/api/patients/:id/reports`       | GET    | Doctor, Shop| Get patient's reports                    |
| `/api/reports`                    | POST   | Doctor      | Generate new report                      |
| `/api/reports/:id/verify`         | PUT    | Doctor      | Mark report as verified                  |
| `/api/shop/patients/:id/send-report`| POST | Shop        | Send report via WhatsApp                 |

### **Report Instructions**
| Endpoint                          | Method | Role Access | Description                              |
|-----------------------------------|--------|-------------|------------------------------------------|
| `/api/reports/:reportId/instructions`| POST | Doctor    | Add instructions to report               |
| `/api/instructions/:id`           | PUT    | Doctor      | Update instructions                      |

---

# 📅 **Scheduled Tests**

| Endpoint                          | Method | Role Access | Description                              |
|-----------------------------------|--------|-------------|------------------------------------------|
| `/api/test-dates`                 | POST   | Doctor      | Schedule new test                        |
| `/api/patients/:id/test-dates`    | GET    | Doctor, Shop| Get patient's scheduled tests            |
| `/api/test-dates/:id`             | PUT    | Doctor      | Update test status/results               |

---

