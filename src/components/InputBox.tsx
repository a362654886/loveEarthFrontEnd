import * as React from "react";
import { InputBoxType } from "../types/EnumTypes";
import { DatePicker, Input, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { SelectValue } from "antd/lib/select";
import styled from "styled-components";

const InputDiv = styled.div`
  display: flex;
  margin: 1rem auto;
  width: 100%;
`;

export const Label = styled.label`
  background-color: #e4f1d0;
  height: 32px;
  width: 150px;
  border-radius: 20px 0 0 20px;
  padding-left: 25px;
  line-height: 32px;
  margin: 0;
  color: black;
`;

const InputBody = styled(Input)`
  height: 32px;
  width: 80%;
  border-radius: 0 20px 20px 0;
`;

const SelectBody = styled(Select)`
  height: 32px;
  width: 80%;
`;

const DatePickerBody = styled(DatePicker)`
  height: 32px;
  width: 80%;
`;

const { Option } = Select;

interface IProps {
  Title: string;
  onChange?: ((e: React.ChangeEvent) => void) | any;
  onSelectChange?: (e: SelectValue) => void;
  onMultipleSelectChange?: (e: SelectValue) => void;
  type: InputBoxType;
  options?: string[];
  value?: string | number | null;
  date?: moment.Moment;
  disabled?: boolean;
  ifShow?: string;
}

const InputBox = ({
  Title,
  onChange,
  onSelectChange,
  onMultipleSelectChange,
  type,
  options,
  value,
  date,
  disabled,
  ifShow,
}: IProps): JSX.Element => {
  const getBox = (): JSX.Element => {
    const selectOptions = options ? options : [];
    switch (type) {
      case InputBoxType.INPUT:
        return (
          <InputDiv>
            <Label>{Title}</Label>
            <InputBody
              placeholder={Title}
              onChange={onChange}
              value={value ? value : ""}
              disabled={disabled}
            />
          </InputDiv>
        );
      case InputBoxType.TEXTAREA:
        return (
          <InputDiv>
            <Label>{Title}</Label>
            <TextArea
              style={{ width: "80%" }}
              placeholder={Title}
              onChange={onChange}
            />
          </InputDiv>
        );
      case InputBoxType.SELECT:
        return (
          <InputDiv>
            <Label>{Title}</Label>
            <SelectBody
              defaultValue={value ? value : selectOptions[0]}
              onSelect={onSelectChange}
            >
              {selectOptions.map(
                (value: string, index: number): JSX.Element => {
                  return (
                    <Option key={index} value={value}>
                      {value}
                    </Option>
                  );
                }
              )}
            </SelectBody>
          </InputDiv>
        );
      case InputBoxType.MULTIPLE_SELECT:
        return (
          <InputDiv>
            <Label>{Title}</Label>
            <SelectBody
              mode="multiple"
              allowClear
              defaultValue={selectOptions}
              onChange={onMultipleSelectChange}
            >
              {selectOptions.map(
                (value: string, index: number): JSX.Element => {
                  return (
                    <Option key={index} value={value}>
                      {value}
                    </Option>
                  );
                }
              )}
            </SelectBody>
          </InputDiv>
        );
      case InputBoxType.DATE_PICKER:
        return (
          <InputDiv>
            <Label>{Title}</Label>
            <DatePickerBody
              style={{ width: "80%", margin: 0 }}
              onChange={onChange}
              value={date}
            />
          </InputDiv>
        );
      default:
        return <></>;
    }
  };

  return (
    <div className="InputBox" style={{ display: ifShow }}>
      {getBox()}
    </div>
  );
};

export default InputBox;
