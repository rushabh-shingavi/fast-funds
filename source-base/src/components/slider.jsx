import { Slider, Input,} from "antd";
import {
  allowOnlyNumbers,
  amountFormat,
} from "../services/common.service";

export default function CustomSlider(props) {
  const {
    min,
    max,
    disabled,
    value,
    onChange,
    tipFormatter,
    className,
    formatValues,
    type,
    step,
    currency,
  } = props;

  const formatValue = (val) =>
    formatValues
      ? amountFormat(
          val,
          currency || "NPR"
        )
      : `${val} ${type}`;

  const handleInputChange = (event) => {
    const inputValue = event.target.value.replace(/\D/g, "");
    const newValue =
      inputValue === "" ? min : Math.min(Number(inputValue), max);
    onChange(newValue);
  };

  const handleBlur = () => {
    if (value < min) {
      onChange(min);
    } else if (value > max) {
      onChange(max);
    }
  };

  return (
    <>
      <Slider
        min={min}
        max={max}
        disabled={disabled}
        value={value}
        onChange={onChange}
        tipFormatter={tipFormatter}
        //  tipFormatter={(value) => amountFormat(value)}
        step={step}
        className={className}
      >
        <Input
          value={value}
          onChange={handleInputChange}
          onBlur={handleBlur}
          addonBefore={"NPR"}
          addonAfter={max}
          size="large"
          onKeyPress={(e) => allowOnlyNumbers(e)}
        />
      </Slider>
      <div className="row">
        <div align="left" className="col mb-3">
          {formatValue(min)}
        </div>
        <div align="right" className="col mb-3">
          {formatValue(max)}
        </div>
      </div>
    </>
  );
}
