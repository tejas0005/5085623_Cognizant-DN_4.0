package com.Hibernate;

import java.util.*;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
public class EmployeeManager {
    public static void main(String[] args) {
        SessionFactory factory = new Configuration().configure().buildSessionFactory();
        Session session = factory.openSession();
        
        Transaction tx = session.beginTransaction();

        // First Employee
        Employee emp1 = new Employee();
        emp1.setId(1);
        emp1.setName("Tejas");
        emp1.setDept("CSE");
        emp1.setSalary(60000.0);
        session.save(emp1);

        // Second Employee
        Employee emp2 = new Employee();
        emp2.setId(2);
        emp2.setName("Tinku");
        emp2.setDept("IT");
        emp2.setSalary(70000.0);
        session.save(emp2);

        tx.commit();

        // FETCH and DISPLAY all employees
        List<Employee> employees = session.createQuery("from Employee", Employee.class).list();

        System.out.println("\n--- All Employees ---");
        for (Employee e : employees) {
            System.out.println("ID: " + e.getId());
            System.out.println("Name: " + e.getName());
            System.out.println("Salary: " + e.getSalary());
            System.out.println("Dept: " + e.getDept());
            System.out.println("----------------------");
        }

        session.close();
        factory.close();
    }
}