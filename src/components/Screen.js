import React, { useEffect, useState } from "react";
import Messages from "./Messages";
import Textbox from "./Textbox";
const Screen = (props) => {
  const questions = [
    {
      controllType: "LABEL",
      multiSelect: false,
      options: [
        {
          Id: 6,
          controllType: "TEXTBOX",
          name: "",
          required: false,
          value: "",
        },
      ],
      pid: "3",
      qId: 7,
      question:
        "Mr Singh, as I’ll be servicing your needs, your importance and sophistication will be catered for, wherever you go. \nI shall address you formally with your salutation and surname (unless you state otherwise), however, I would like to take the opportunity to get to know you better and ask, may I have the honor of knowing your first name?",
      tag: "surname",
    },
    {
      controllType: "LABEL",
      multiSelect: false,
      options: [
        {
          Id: 1,
          controllType: "BUTTON",
          name: "Male",
          required: false,
          value: "",
        },
        {
          Id: 2,
          controllType: "BUTTON",
          name: "Female",
          required: false,
          value: "",
        },
        {
          Id: 3,
          controllType: "BUTTON",
          name: "Others",
          required: false,
          value: "",
        },
      ],
      pid: "3",
      qId: 8,
      question: "What gender do you identify as ?",
      tag: "None",
    },
    {
      controllType: "LABEL",
      multiSelect: false,
      options: [
        {
          Id: 4,
          controllType: "BUTTON",
          name: "Yes",
          required: true,
          value: "",
        },
        {
          Id: 5,
          controllType: "BUTTON",
          name: "No",
          required: false,
          value: "",
        },
      ],
      pid: "3",
      qId: 9,
      question:
        "Do you have an alias that you would prefer to use when you are in “stealth” mode?",
      tag: "nickname",
    },
    {
      controllType: "LABEL",
      multiSelect: false,
      options: [
        {
          Id: 8,
          controllType: "DDL",
          name: "",
          required: false,
          value: "",
        },
      ],
      pid: "3",
      qId: 50,
      question:
        "Thanks for confirming. You can always let me know if you would like to update this at a later stage.Let us understand more about your global presence. Which country were you born in?",
      tag: "birthCountry",
    },
    {
      controllType: "LABEL",
      multiSelect: false,
      options: [
        {
          Id: 7,
          controllType: "DDL",
          name: "",
          required: false,
          value: "",
        },
      ],
      pid: "3",
      qId: 10,
      question: "Which country do you reside in now?",
      tag: "residenceCountry",
    },
    {
      controllType: "LABEL",
      multiSelect: false,
      options: [
        {
          Id: 9,
          controllType: "TEXTBOX",
          name: "",
          required: false,
          value: "",
        },
      ],
      pid: "3",
      qId: 11,
      question:
        "[Insert Culturally relevant “Fantastic” Greeting (Fantastique!)].\nWhat is your mobile number?",
      tag: "None",
    },
    {
      controllType: "LABEL",
      multiSelect: true,
      options: [
        {
          Id: 10,
          controllType: "BUTTON",
          name: "Vegan",
          required: false,
          value: "",
        },
        {
          Id: 11,
          controllType: "BUTTON",
          name: "Vegetarian",
          required: false,
          value: "",
        },
        {
          Id: 12,
          controllType: "BUTTON",
          name: "Dairy-free",
          required: false,
          value: "",
        },
        {
          Id: 13,
          controllType: "BUTTON",
          name: "Lactose-free",
          required: false,
          value: "",
        },
        {
          Id: 14,
          controllType: "BUTTON",
          name: "Gluten-Free",
          required: false,
          value: "",
        },
        {
          Id: 15,
          controllType: "BUTTON",
          name: "Ketogenic diet",
          required: false,
          value: "",
        },
        {
          Id: 16,
          controllType: "BUTTON",
          name: "Paleo diet",
          required: false,
          value: "",
        },
        {
          Id: 17,
          controllType: "BUTTON",
          name: "Others",
          required: true,
          value: "",
        },
        {
          Id: 18,
          controllType: "BUTTON",
          name: "None",
          required: false,
          value: "",
        },
      ],
      pid: "3",
      qId: 12,
      question: "I’d like to know about your current dietary requirements?",
      tag: "dietaryBelief",
    },
    {
      controllType: "LABEL",
      multiSelect: true,
      options: [
        {
          Id: 19,
          controllType: "BUTTON",
          name: "Tree nut allergy",
          required: false,
          value: "",
        },
        {
          Id: 20,
          controllType: "BUTTON",
          name: "Peanut allergy",
          required: false,
          value: "",
        },
        {
          Id: 21,
          controllType: "BUTTON",
          name: "Fish allergy",
          required: false,
          value: "",
        },
        {
          Id: 22,
          controllType: "BUTTON",
          name: "Shellfish allergy",
          required: false,
          value: "",
        },
        {
          Id: 23,
          controllType: "BUTTON",
          name: "Others",
          required: true,
          value: "",
        },
        {
          Id: 24,
          controllType: "BUTTON",
          name: "None",
          required: false,
          value: "",
        },
      ],
      pid: "3",
      qId: 13,
      question:
        "I’ve noted your dietary requirements so you can enjoy your meals and shopping experiences without any unpleasant surprises.Would you mind sharing any allergies you have, which I should be aware of?",
      tag: "foodAllergies",
    },
    {
      controllType: "LABEL",
      multiSelect: false,
      options: [
        {
          Id: 25,
          controllType: "BUTTON",
          name: "Yes(Please tell me the detail)",
          required: true,
          value: "",
        },
        {
          Id: 26,
          controllType: "BUTTON",
          name: "No",
          required: false,
          value: "",
        },
      ],
      pid: "3",
      qId: 14,
      question:
        "(1) Noted! (2) It is essential that I am aware of any particular requests you may have. I will make sure to prioritise these when you engage with businesses.\n“Do you have any other special requirements I should know about?”",
      tag: "otherRequirements",
    },
    {
      controllType: "LABEL",
      multiSelect: false,
      options: [],
      pid: "3",
      qId: 15,
      question:
        "Mr Singh, it is a pleasure to welcome you to our exclusive lifestyle community 🤝.I am confident I can securely and appropriately convey the detail you have provided to the businesses you support. Furthermore, I will keep you informed of any changes or updates that may improve your lifestyle experiences. With the information you have provided, I am eager to start creating an experience tailored to your specific needs. As I get to know you better, I will request any additional details that may enrich your life even further. It is my utmost pleasure to be your personal BTLR and make your life experiences more meaningful.",
      tag: "None",
    },
    {
      controllType: "LABEL",
      multiSelect: false,
      options: [],
      pid: "3",
      qId: 16,
      question:
        "P.S. everything I learn, I will share wit you in the preferences tab to your right. If you have any questions, do not hesitate to reach out - I am here for you!",
      tag: "None",
    },
  ];

  const [qindex, setqindex] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [responses, setResponses] = useState([
    {
      isUserResponse: false,
      answer: questions[qindex].question,
      options: questions[qindex].options,
    },
  ]);
  const [response, setResponse] = useState("");
  useEffect(() => {
    questions[qindex].options.length === 0
      ? setDisabled(false)
      : questions[qindex].options.map((button, index) => {
          return button.controllType === "TEXTBOX"
            ? setDisabled(false)
            : setDisabled(true);
        });
  }, [qindex]);

  const handleLastResponse = () => {
    const isDisabled =
      questions[qindex].options.length === 0 ||
      questions[qindex].options.some(
        (button) => button.controllType === "TEXTBOX"
      );

    if (response.trim() !== "") {
      setResponses([
        ...responses,
        {
          isUserResponse: true,
          answer: response,
        },
      ]);
    }

    setDisabled(isDisabled);
  };

  const handleResponse = () => {
    const isDisabled =
      questions[qindex].options.length === 0 ||
      questions[qindex].options.some(
        (button) => button.controllType === "TEXTBOX"
      );

    setResponses([
      ...responses,
      {
        isUserResponse: true,
        answer: response,
      },
      {
        isUserResponse: false,
        answer: questions[qindex + 1].question,
        options: questions[qindex + 1].options,
      },
    ]);

    setDisabled(isDisabled);
    setqindex(qindex + 1);
  };

  const handleButtonResponse = (responseText) => {
    const isDisabled = questions.length - 1;

    setResponses([
      ...responses,
      { isUserResponse: true, answer: responseText },
      {
        isUserResponse: false,
        answer: questions[qindex + 1].question,
        options: questions[qindex + 1].options,
      },
    ]);
    setDisabled(isDisabled);
    setqindex(qindex + 1);
  };

  const handleCountryResponse = (countryText) => {
    const isDisabled = questions.length - 1;
    setResponses([
      ...responses,
      { isUserResponse: true, answer: countryText },
      {
        isUserResponse: false,
        answer: questions[qindex + 1].question,
        options: questions[qindex + 1].options,
      },
    ]);
    setDisabled(isDisabled);
    setqindex(qindex + 1);
  };
  const handleNone = (buttonText) => {
    handleButtonResponse(buttonText);
    setResponse("");
  };
  const handleOther = () => {
    setDisabled(false);
    setResponse(response);
  };
  const handleAddButton = (buttonText) => {
    const isMultiSelect = questions[qindex].multiSelect;

    if (
      !isMultiSelect &&
      questions[qindex].options.some((button) => button.required)
    ) {
      setDisabled(false);
    } else {
      const buttonExists = response.includes(buttonText);

      if (buttonExists) {
        const updatedResponse = response
          .split(",")
          .filter((button) => button !== buttonText)
          .join(",");
        setResponse(updatedResponse);
      } else {
        let updatedResponse = response;

        if (isMultiSelect) {
          response === ""
            ? (updatedResponse += buttonText)
            : (updatedResponse += "," + buttonText);
        } else {
          updatedResponse = buttonText;
        }

        setResponse(updatedResponse);

        if (isMultiSelect && buttonText === "None") {
          handleNone(buttonText);
        } else if (isMultiSelect && buttonText === "Others") {
          handleOther();
        } else if (!isMultiSelect && buttonText === "No") {
          handleNone(buttonText);
        }
      }
    }
  };

  return (
    <div className=" m-auto mt-14 h-full rounded-3xl bg-quinary mb-10 w-[90%]   p-4 flex flex-col justify-between sm:w-4/5 lg:w-3/5">
      <>
        {responses.map((item) => (
          <div>
            <Messages
              addButton={questions[qindex]}
              i={qindex}
              questions={questions}
              item={item}
              handleAddButton={handleAddButton}
              setResponse={setResponse}
              setDisabled={setDisabled}
              handlesResponse={handleButtonResponse}
              handleCountryResponse={handleCountryResponse}
            />
          </div>
        ))}
      </>
      {qindex < questions.length && (
        <Textbox
          handleResponse={handleResponse}
          handleLastResponse={(response) =>
            handleLastResponse(questions[qindex], response)
          }
          disabled={disabled}
          question={questions[qindex].question}
          response={response}
          setResponse={setResponse}
          setDisabled={setDisabled}
          i={qindex}
        />
      )}
    </div>
  );
};

export default Screen;
