import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Select, Button } from 'antd';

const { Option } = Select;

const FormInput = ({ regions, selectedRegion, onChange, onSubmit }) => {
  const dispatch = useDispatch();
  const regionInfo = useSelector((state) => state.region.regionInfo);

  const handleLoadButtonClick = () => {

    const regionInfo = {
      currency: 'USD',
      speedUnit: 'kmph',
      distanceUnit: 'kilometers',
      volumeUnit: 'liters',
      timezone: ['2023 Mar 03 09:12:41.211 GMT', 'T2023 Mar 04 09:12:41.211 GMT'],
    };
    dispatch({ type: 'LOAD_REGION_INFO', payload: regionInfo });
  };

  return (
    <Form layout="inline">
      <Form.Item>
        <Select
          style={{ width: 200 }}
          placeholder="Select a region"
          value={selectedRegion}
          onChange={onChange}
        >
          {regions.map((region) => (
            <Option key={region} value={region}>
              {region}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={onSubmit}>
          Load Region Info
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormInput;
