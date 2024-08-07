const User = require("../models/user-models");
const Contact = require("../models/contact-model");
const Payment = require("../models/payment-model");
const Form = require("../models/form-model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No contacts found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllForm = async (req, res) => {
  try {
    const forms = await Form.find();
    if (!forms || forms.length === 0) {
      return res.status(404).json({ message: "No records found" });
    }
    return res.status(200).json(forms);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    if (!payments || payments.length === 0) {
      return res.status(404).json({ message: "No records found" });
    }
    return res.status(200).json(payments);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUserData = req.body;
    const updatedData = await User.updateOne(
      { _id: id },
      { $set: updatedUserData }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
const updatePaymentsById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPaymentData = req.body;
    const updatedData = await Payment.updateOne(
      { _id: id },
      { $set: updatedPaymentData }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await User.findOne({ _id: id });
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
const getFormsById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Form.findOne({ _id: id });
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getPaymentsById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Payment.findOne({ _id: id });
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteContactById = async (req, res) => {
  try {
    const { id } = req.params;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteFormsById = async (req, res) => {
  try {
    const { id } = req.params;
    await Form.deleteOne({ _id: id });
    return res.status(200).json({ message: "Forms deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const deletePaymentById = async (req, res) => {
  try {
    const { id } = req.params;
    await Payment.deleteOne({ _id: id });
    return res.status(200).json({ message: "Payment deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  getAllPayments,
  getAllForm,
  getUserById,
  updateUserById,
  updatePaymentsById,
  deleteContactById,
  deleteFormsById,
  getPaymentsById,
  deletePaymentById,
  getFormsById,

};
