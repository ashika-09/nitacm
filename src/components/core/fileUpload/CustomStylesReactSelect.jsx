// Custom styles for the react-select component
const customStylesReactSelect = {
  control: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: "white", // Background color of the input
    color: "black", // Text color for the input box
    border: "2px solid #d1d5db", // Border color
    borderRadius: "8px", // Rounded corners for the input box
    padding: "0.5rem", // Padding for better spacing inside
    transition: "all 0.3s ease", // Smooth transition for focus effect
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Light shadow for elevation
    "&:hover": {
      borderColor: "#4299e1", // Border color on hover
    },
    "&:focus": {
      borderColor: "#3182ce", // Border color on focus
      boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.4)", // Focused shadow
    },
  }),

  input: (baseStyles) => ({
    ...baseStyles,
    color: "black", // Text color in the search box
    fontSize: "14px", // Font size for the input text
  }),

  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: "#2d3748", // Text color for selected option
    fontWeight: "600", // Bold selected value
  }),

  menu: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: "#f7fafc", // Background color of the dropdown menu
    color: "black", // Text color of the options
    borderRadius: "8px", // Rounded corners for the dropdown menu
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Soft shadow for the dropdown
    marginTop: "4px", // Add space between the control and the menu
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#b6d0fa" : "#fafbfc", // Highlight background for selected option
    color: "black",
    padding: "10px", // Padding for the option items
    fontSize: "14px", // Font size for the options
    borderRadius: "6px", // Rounded corners for the options
    transition: "background-color 0.2s ease", // Smooth transition for hover effect
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#4299e1", // Hover background color
      color: "white", // Hover text color
    },
    "&:active": {
      backgroundColor: "#3182ce", // Active (clicked) background color
    },
  }),

  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: "#a0aec0", // Light grey color for the placeholder
    fontSize: "14px", // Font size for the placeholder text
  }),

  clearIndicator: (baseStyles) => ({
    ...baseStyles,
    color: "#2d3748", // Color for the clear button (X)
    "&:hover": {
      color: "#e53e3e", // Color for the clear button on hover
    },
  }),

  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    color: "#2d3748", // Color for the dropdown indicator (arrow)
    "&:hover": {
      color: "#4299e1", // Hover color for the dropdown arrow
    },
  }),

  multiValue: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: "#e2e8f0", // Background color for the multi-select tags
    color: "#2d3748", // Text color inside the multi-select tags
    borderRadius: "20px", // Rounded corners for tags
    padding: "5px 10px", // Padding inside tags
    fontSize: "12px", // Font size for the multi-select tags
  }),

  multiValueLabel: (baseStyles) => ({
    ...baseStyles,
    color: "#2d3748", // Text color for the label inside the tag
    fontWeight: "600", // Bold text for better visibility
  }),

  multiValueRemove: (baseStyles) => ({
    ...baseStyles,
    color: "#e53e3e", // Red color for the remove button
    "&:hover": {
      backgroundColor: "transparent", // Remove background on hover
      color: "#e53e3e", // Hover color for the remove button
    },
  }),
};

export default customStylesReactSelect;
