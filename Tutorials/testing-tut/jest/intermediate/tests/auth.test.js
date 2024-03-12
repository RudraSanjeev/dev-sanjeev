// const request = require("supertest");
// const server = require("../index.js"); // Replace with the actual path to your Express app
// const mongoose = require("mongoose");
// const User = require("../models/model.user.js"); // Replace with the actual path to your User model
// // Connect to the test database
// beforeAll(async () => {
//   await mongoose.connect("mongodb://localhost:27017/testdb", {
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true,
//   });
// });

// // Clear the database before each test
// beforeEach(async () => {
//   await User.deleteOne({});
// });

// // Disconnect from the test database after all tests
// afterAll(async () => {
//   await mongoose.disconnect();
// });

// // db -connection check
// describe("Database Connection", () => {
//   it("should connect to the MongoDB database", async () => {
//     // Check if Mongoose has successfully connected to the database
//     const isConnected = mongoose.connection.readyState === 1;
//     expect(isConnected).toBeTruthy();
//   });

//   it("should handle database connection error", async () => {
//     // Intentionally provide an incorrect URI to trigger a connection error
//     const invalidUri = "mongodb://localhost:27017/invaliddb";

//     // Disconnect Mongoose before attempting to connect again with the invalid URI
//     await mongoose.disconnect();

//     // Connect Mongoose to an invalid URI
//     try {
//       await mongoose.connect(invalidUri, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//     } catch (err) {
//       // Check if an error occurred during the connection attempt
//       expect(err).toBeDefined(err);
//       return;
//     }

//     // If no error occurred, fail the test
//     // fail("Expected an error but got none.");
//   });
// });

// describe("Authentication API Tests", () => {
//   // register -test
//   describe("POST /api/auth/register", () => {
//     it("should register a new user", async () => {
//       let userData = {
//         // Provide user data for testing
//         // For example, you might want to generate random usernames, emails, and passwords
//         username: "testuser",
//         email: "testuser@example.com",
//         password: "testpassword",
//       };

//       // Send a POST request to the /register endpoint with the test user data
//       let response = await request(server)
//         .post("/api/auth/register")
//         .send(userData)
//         .expect(201);

//       // Assert that the response contains the saved user data
//       expect(response.body.username).toBe(userData.username);
//       expect(response.body.email).toBe(userData.email);
//       userData = response = null;
//       // Optionally, you can also check if the user is actually saved in the database
//       // const user = await User.findOne({ username: userData.username });
//       // expect(user).toBeTruthy();
//     });
//   });

//   // login -- test
//   describe("Login API Tests", () => {
//     // Test Suite 1: Successful Login
//     describe("POST /api/auth/login - Successfull Login", () => {
//       it("Logged in - if user have valid cred.", async () => {
//         let userCred = {
//           username: "testuser",
//           password: "testpassword",
//         };
//         await User.create(userCred);
//         // send a post request to /api/auth/login endpoint
//         let res = await request(server)
//           .post("/api/auth/login")
//           .send(userCred)
//           .expect(200);

//         // asert
//         expect(res.body.username).toBe(userCred.username);

//         userCred = res = null;
//       });

//       // Test Suite 2: Invalid Username
//       describe("POST /api/auth/login - Invalid Username", () => {
//         it("should return a 401 error for an invalid username", async () => {
//           const userData = {
//             username: "testuser",
//             password: "testpassword",
//           };

//           await User.create(userData);

//           const invalidUsernameData = {
//             username: "invaliduser",
//             password: "testpassword",
//           };

//           const response = await request(server)
//             .post("/api/auth/login")
//             .send(invalidUsernameData)
//             .expect(401);

//           expect(response.body).toEqual("Username or password is incorrect!");
//         });
//       });
//       // Test Suite 3: Invalid Password
//       describe("POST /api/auth/login - Invalid Password", () => {
//         it("should return a 401 error for an invalid password", async () => {
//           const userData = {
//             username: "testuser",
//             password: "testpassword",
//           };

//           await User.create(userData);

//           const invalidPasswordData = {
//             username: "testuser",
//             password: "invalidpassword",
//           };

//           const response = await request(server)
//             .post("/api/auth/login")
//             .send(invalidPasswordData)
//             .expect(401);

//           expect(response.body).toEqual("password incorrect !");
//         });
//       });

//       // Test Suite 4: User Not Found
//       describe("POST /api/auth/login - User Not Found", () => {
//         it("should return a 401 error for a non-existent user", async () => {
//           const nonExistentUserData = {
//             username: "nonexistentuser",
//             password: "testpassword",
//           };

//           const response = await request(server)
//             .post("/api/auth/login")
//             .send(nonExistentUserData)
//             .expect(401);

//           expect(response.body).toEqual("Username or password is incorrect!");
//         });
//       });

//       // Test Suite 5: Error Handling
//       describe("POST /api/auth/login - Error Handling", () => {
//         it("should return a 500 error for internal server errors", async () => {
//           // Simulate an internal server error by disconnecting from the database
//           await mongoose.disconnect();

//           const userData = {
//             username: "testuser",
//             password: "testpassword",
//           };

//           const response = await request(server)
//             .post("/api/auth/login")
//             .send(userData)
//             .expect(500);

//           expect(response.body).toEqual("Internal server Error... ");
//         });
//       });
//     });
//   });
// });

// Mocking crypto-js

const request = require("supertest");
const server = require("../index.js");
// const request = supertest(app);
const app = require("../index.js");
const User = require("../models/model.user.js"); // Update the path accordingly
// const CryptoJS = require("crypto-js");
// const { registerSchema } = require("../../validators/auth.validator.js"); // Update the path accordingly

describe("Auth Controller", () => {
  describe("POST /api/register", () => {
    it("should register a new user", async () => {
      // Mock data for the request body
      const userData = {
        username: "John",
        email: "john.doe@example.com",
        password: "Test@123",
      };

      // Mocking CryptoJS.AES.encrypt
      // CryptoJS.AES.encrypt = jest.fn(() => "encryptedPassword");

      // Mocking User.save
      User.prototype.save = jest.fn().mockResolvedValue({
        _id: "mockedUserId",
        ...userData,
      });

      const response = await request(server)
        .post("/api/auth/register")
        .send(userData);

      // Assertions
      expect(response.status).toBe(201);
      expect(response.body).toBe(userData);
      expect(User.prototype.save).toHaveBeenCalled();
      // expect(CryptoJS.AES.encrypt).toHaveBeenCalledWith(
      //   userData.password,
      //   process.env.AES_SEC
      // );
    });

    it("should handle validation errors", async () => {
      // Mock data with missing required fields
      const invalidUserData = {};

      const response = await request(app)
        .post("/api/auth/register")
        .send(invalidUserData);

      // Assertions for validation error handling
      expect(response.status).toBe(201);
      expect(response.body).toBe("Internal server error !");
    });

    it("should handle internal server errors", async () => {
      // Mocking User.save to simulate an internal server error
      User.prototype.save = jest
        .fn()
        .mockRejectedValue(new Error("Mocked error"));

      // Mock data for the request body
      const userData = {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        password: "Test@123",
        phoneNumber: "1234567890",
        role: "buyer",
      };

      const response = await request(app).post("/api/register").send(userData);

      // Assertions for internal server error handling
      expect(response.status).toBe(500);
      expect(response.body).toBe("Internal server error !");
    });
  });
});
