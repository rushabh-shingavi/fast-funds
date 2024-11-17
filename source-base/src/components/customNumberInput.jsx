import React from "react";
import { Form, Input } from "antd";
import { NumericFormat } from "react-number-format";
import { allowOnlyPressesNumbersWithMaxLimit } from "../services/common.service";

const CustomNumberInput = ({
  name,
  label,
  maxLimit,
  minLimit,
  allowNegative = false,
  thousandsSeparator = true,
  thousandsGroupStyle = "thousand",
  prefix,
  suffix,
  size = "large",
  onChange,
  allowLeadingZeros = false,
  disabled,
}) => {
  const handleValueChange = (values) => {
    if (typeof values.value === "string") {
      const newValue = Number(values.value.replace(/[^0-9]/g, ""));
      if (newValue <= maxLimit) {
        onChange(newValue);
      }
    }
  };

  const allowOnlyNumberswithMinLimit = (value) => {
    if (typeof value === "string") {
      const newValue = Number(value.replace(/[^0-9]/g, ""));
      if(newValue < minLimit){
        onChange(minLimit);
      }
    }
  }

  return (
    <Form.Item name={name} label={label}>
      <NumericFormat
        maxLength={maxLimit?.length}
        max={maxLimit}
        allowNegative={allowNegative}
        customInput={Input}
        thousandSeparator={thousandsSeparator}
        // thousandsGroupStyle= {"thousand"}
        thousandsGroupStyle={thousandsGroupStyle}
        onValueChange={handleValueChange}
        onBlur={(e) => allowOnlyNumberswithMinLimit(e.target.value)}
        addonBefore={prefix}
        suffix={suffix}
        size={size}
        disabled={disabled}
        allowLeadingZeros={allowLeadingZeros}
        onKeyPress={(e) => allowOnlyPressesNumbersWithMaxLimit(e, maxLimit)}
      />
    </Form.Item>
  );
};

export default CustomNumberInput;
