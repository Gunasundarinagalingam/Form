import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { useAppContext } from "../libs/contextLib";
import { useFormFields } from "../libs/hooksLib";
import { onError } from "../libs/errorLib";

export default function Signup() {
  const [fields, handleFieldChange] = useFormFields({
    firstname: "",
    lastname: "",
    phonenumber: "",
    E-mail: "",
    Country:"",
    State:"",
    Food:"",
  });
  const history = useHistory();
  const [newUser, setNewUser] = useState(null);
  const { userHasAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);

  function myFunction() {
  var myname = document.getElementById("myname").value;
  var mylname = document.getElementById("mylname").value;
  var myphone = document.getElementById("myphone").value;
  var mymail = document.getElementById("mymail").value;
  var mycountry = document.getElementById("mycontry").value;
  var mystate = document.getElementById("mystate").value;
  var myfoods = document.getElementById("myfoods").value;
  result = myname + "," + myphone + "," + mymail + "," + mycountry + "," + mystate + "," + myfoods;
  alert(result);
  return result;
}

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    setNewUser("test");

    setIsLoading(false);
  }

  async function handleConfirmationSubmit(event) {
    event.preventDefault();

    setIsLoading(true);
  }
  );
}
