import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import EmployeeService from "../../../services/employeeService";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    let employeeService = new EmployeeService();
    employeeService.getEmployees().then((result) => {
      setEmployees(result.data.data);
    });
  }, []);
  return (
    <div>
      {employees.map((employee) => (
        <Card.Group>
          <Card>
            <Card.Content>
              <Card.Header>
                {employee.firstName} {employee.lastName}
              </Card.Header>
              <Card.Meta>{employee.email}</Card.Meta>
            </Card.Content>
          </Card>
        </Card.Group>
      ))}
    </div>
  );
}
