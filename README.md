# Education Management System (EMS) for X City

## Overview

This repository contains the backend and frontend code for the Education Management System (EMS) for X City. The EMS is a comprehensive, web-based application designed to streamline and modernize the management of educational institutions in X City. It provides a centralized platform for various administrative tasks, including:

- Student and Teacher Management
- Academic Management
- Event Management
- Financial Management
- Reporting and Analytics
- Communication and Collaboration

This README provides a detailed description of the project, its functionalities, technical details, and development progress.

## Project Directory Structure

```
├── backend
│   ├── app.js
│   ├── config
│   │   ├── config.json
│   │   ├── database.js
│   │   └── sequelize_cmd.txt
│   ├── controllers
│   │   ├── addressController.js
│   │   ├── administratorController.js
│   │   ├── classController.js
│   │   ├── contactController.js
│   │   ├── departmentController.js
│   │   ├── parentController.js
│   │   ├── parentStudentController.js
│   │   ├── principalController.js
│   │   ├── roleController.js
│   │   ├── schoolController.js
│   │   ├── schoolDepartmentController.js
│   │   ├── schoolParentController.js
│   │   ├── studentController.js
│   │   ├── teacherClassController.js
│   │   ├── teacherController.js
│   │   └── userController.js
│   ├── middlewares
│   │   └── auth-token.js
│   ├── migrations
│   │   ├── 20240728070000-create-user.js
│   │   ├── 20240728070156-create-administrator.js
│   │   ├── 20240728070435-create-principal.js
│   │   ├── 20240728071640-create-student.js
│   │   ├── 20240728071702-create-teacher.js
│   │   ├── 20240728071724-create-parent.js
│   │   ├── 20240728071736-create-school.js
│   │   ├── 20240728071745-create-address.js
│   │   ├── 20240728071754-create-role.js
│   │   ├── 20240728071802-create-parent-student-relationship.js
│   │   ├── 20240728071810-create-contact.js
│   │   ├── 20240728071831-create-department.js
│   │   ├── 20240728072009-create-class.js
│   │   ├── 20240728072038-create-user-role.js
│   │   ├── 20240728072049-create-class-teacher.js
│   │   ├── 20240730034239-create-school-parent.js
│   │   ├── 20240730080406-create-teacher-class.js
│   │   ├── 20240730081747-create-school-depertment.js
│   │   └── 20240811192200-add_new_col_to_school.js
│   ├── models
│   │   ├── address.js
│   │   ├── administrator.js
│   │   ├── class.js
│   │   ├── contact.js
│   │   ├── department.js
│   │   ├── index.js
│   │   ├── parent.js
│   │   ├── parentstudent.js
│   │   ├── principal.js
│   │   ├── role.js
│   │   ├── schooldepartment.js
│   │   ├── school.js
│   │   ├── schoolparent.js
│   │   ├── student.js
│   │   ├── teacherclass.js
│   │   ├── teacher.js
│   │   ├── user.js
│   │   └── userrole.js
│   ├── package.json
│   ├── package-lock.json
│   ├── routes
│   │   ├── addressRoutes.js
│   │   ├── administratorRoutes.js
│   │   ├── classRoutes.js
│   │   ├── contactRoutes.js
│   │   ├── departmentRoutes.js
│   │   ├── parentRoutes.js
│   │   ├── parentStudentRoutes.js
│   │   ├── principalRoutes.js
│   │   ├── roleRoutes.js
│   │   ├── schoolDepartmentRoutes.js
│   │   ├── schoolParentRoutes.js
│   │   ├── schoolRoutes.js
│   │   ├── studentRoutes.js
│   │   ├── teacherClassRoutes.js
│   │   ├── teacherRoutes.js
│   │   └── userRoutes.js
│   ├── seeders
│   ├── server.js
│   ├── services
│   │   ├── addressServices.js
│   │   ├── administratorServices.js
│   │   ├── classServices.js
│   │   ├── contactServices.js
│   │   ├── departmentServices.js
│   │   ├── parentServices.js
│   │   ├── parentStudentServices.js
│   │   ├── principalServices.js
│   │   ├── roleServices.js
│   │   ├── schoolDeparmentServices.js
│   │   ├── schoolParentServices.js
│   │   ├── schoolServices.js
│   │   ├── studentServices.js
│   │   ├── teacherClassServices.js
│   │   ├── teacherServices.js
│   │   └── userServices.js
│   ├── test.js
│   └── utils
├── frontend
│   ├── index.html
│   ├── node_module
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   └── vite.svg
│   ├── README.md
│   ├── src
│   │   ├── api.js
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── assets
│   │   │   ├── circle8175.png
│   │   │   ├── ems_ai_logo2.jpeg
│   │   │   ├── ems_ai_logo3.jpeg
│   │   │   ├── ems_ai_logo.jpeg
│   │   │   ├── ems_ai_logo.png
│   │   │   └── react.svg
│   │   ├── components
│   │   │   ├── buttons.jsx
│   │   │   ├── center.jsx
│   │   │   ├── column_wrapper.jsx
│   │   │   ├── ems_logo.jsx
│   │   │   ├── full_screen.jsx
│   │   │   ├── input_field.jsx
│   │   │   ├── line_separator.jsx
│   │   │   ├── protectred_routes.jsx
│   │   │   ├── row_wrapper.jsx
│   │   │   ├── Typography.jsx
│   │   │   └── wrapper.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── pages
│   │   │   ├── admin
│   │   │   │   ├── admin_dashboard copy.jsx
│   │   │   │   ├── admin_dashboard.jsx
│   │   │   │   ├── dashboard-contents
│   │   │   │   │   ├── help.jsx
│   │   │   │   │   ├── home.jsx
│   │   │   │   │   ├── logout.jsx
│   │   │   │   │   ├── profile.jsx
│   │   │   │   │   ├── report.jsx
│   │   │   │   │   ├── school.jsx
│   │   │   │   │   ├── school-pages
│   │   │   │   │   │   ├── add-school.jsx
│   │   │   │   │   │   ├── button-styles.css
│   │   │   │   │   │   ├── edit-school3.jsx
│   │   │   │   │   │   ├── edit-school.jsx
│   │   │   │   │   │   ├── school-info-pages
│   │   │   │   │   │   │   ├── school-clubs.jsx
│   │   │   │   │   │   │   ├── school-departments.jsx
│   │   │   │   │   │   │   ├── school-details.jsx
│   │   │   │   │   │   │   ├── school-events.jsx
│   │   │   │   │   │   │   ├── school-extras.jsx
│   │   │   │   │   │   │   ├── school-students.jsx
│   │   │   │   │   │   │   └── school-teachers.jsx
│   │   │   │   │   │   ├── school-listing.jsx
│   │   │   │   │   │   ├── school-lists
│   │   │   │   │   │   │   ├── active-school-listing.jsx
│   │   │   │   │   │   │   ├── all-school-listing.jsx
│   │   │   │   │   │   │   ├── archived-school-listing.jsx
│   │   │   │   │   │   │   ├── deleted-school-listing.jsx
│   │   │   │   │   │   │   └── pending-school-listing.jsx
│   │   │   │   │   │   └── view-school.jsx
│   │   │   │   │   ├── setting.jsx
│   │   │   │   │   └── users.jsx
│   │   │   │   └── login.jsx
│   │   │   └── auth-pages
│   │   │       ├── admin_login.jsx
│   │   │       ├── create_user.jsx
│   │   │       ├── login.jsx
│   │   │       ├── school_create.jsx
│   │   │       └── student_login.jsx
│   │   ├── routes
│   │   │   ├── admin_routes.jsx
│   │   │   ├── auth_routes.jsx
│   │   │   └── index.jsx
│   │   ├── store
│   │   │   ├── index.js
│   │   │   ├── slices
│   │   │   │   ├── admin_slices.js
│   │   │   │   └── auth_slices.js
│   │   │   └── store.js
│   │   └── styles
│   │       ├── admin-dashboard
│   │       │   ├── edit_field.css
│   │       │   ├── main-styles.css
│   │       │   └── view-school.css
│   │       ├── admin_dashboard.css
│   │       ├── admin-school.css
│   │       ├── buttons.css
│   │       ├── center_containers.css
│   │       ├── column_styles.css
│   │       ├── full_screen.css
│   │       ├── input_style.css
│   │       ├── line_style.css
│   │       ├── logo_style.css
│   │       ├── row_styles.css
│   │       ├── typography_styles.css
│   │       └── wrapper.css
│   └── vite.config.js
├── mobile
│   ├── analysis_options.yaml
│   ├── android
│   │   ├── app
│   │   │   ├── build.gradle
│   │   │   └── src
│   │   │       ├── debug
│   │   │       │   └── AndroidManifest.xml
│   │   │       ├── main
│   │   │       │   ├── AndroidManifest.xml
│   │   │       │   ├── java
│   │   │       │   │   └── io
│   │   │       │   │       └── flutter
│   │   │       │   │           └── plugins
│   │   │       │   │               └── GeneratedPluginRegistrant.java
│   │   │       │   ├── kotlin
│   │   │       │   │   └── com
│   │   │       │   │       └── example
│   │   │       │   │           └── mobile
│   │   │       │   │               └── MainActivity.kt
│   │   │       │   └── res
│   │   │       │       ├── drawable
│   │   │       │       │   └── launch_background.xml
│   │   │       │       ├── drawable-v21
│   │   │       │       │   └── launch_background.xml
│   │   │       │       ├── mipmap-hdpi
│   │   │       │       │   └── ic_launcher.png
│   │   │       │       ├── mipmap-mdpi
│   │   │       │       │   └── ic_launcher.png
│   │   │       │       ├── mipmap-xhdpi
│   │   │       │       │   └── ic_launcher.png
│   │   │       │       ├── mipmap-xxhdpi
│   │   │       │       │   └── ic_launcher.png
│   │   │       │       ├── mipmap-xxxhdpi
│   │   │       │       │   └── ic_launcher.png
│   │   │       │       ├── values
│   │   │       │       │   └── styles.xml
│   │   │       │       └── values-night
│   │   │       │           └── styles.xml
│   │   │       └── profile
│   │   │           └── AndroidManifest.xml
│   │   ├── build.gradle
│   │   ├── gradle
│   │   │   └── wrapper
│   │   │       ├── gradle-wrapper.jar
│   │   │       └── gradle-wrapper.properties
│   │   ├── gradle.properties
│   │   ├── gradlew
│   │   ├── gradlew.bat
│   │   ├── local.properties
│   │   ├── mobile_android.iml
│   │   └── settings.gradle
│   ├── ios
│   │   ├── Flutter
│   │   │   ├── AppFrameworkInfo.plist
│   │   │   ├── Debug.xcconfig
│   │   │   ├── flutter_export_environment.sh
│   │   │   ├── Generated.xcconfig
│   │   │   └── Release.xcconfig
│   │   ├── Runner
│   │   │   ├── AppDelegate.swift
│   │   │   ├── Assets.xcassets
│   │   │   │   ├── AppIcon.appiconset
│   │   │   │   │   ├── Contents.json
│   │   │   │   │   ├── Icon-App-1024x1024@1x.png
│   │   │   │   │   ├── Icon-App-20x20@1x.png
│   │   │   │   │   ├── Icon-App-20x20@2x.png
│   │   │   │   │   ├── Icon-App-20x20@3x.png
│   │   │   │   │   ├── Icon-App-29x29@1x.png
│   │   │   │   │   ├── Icon-App-29x29@2x.png
│   │   │   │   │   ├── Icon-App-29x29@3x.png
│   │   │   │   │   ├── Icon-App-40x40@1x.png
│   │   │   │   │   ├── Icon-App-40x40@2x.png
│   │   │   │   │   ├── Icon-App-40x40@3x.png
│   │   │   │   │   ├── Icon-App-60x60@2x.png
│   │   │   │   │   ├── Icon-App-60x60@3x.png
│   │   │   │   │   ├── Icon-App-76x76@1x.png
│   │   │   │   │   ├── Icon-App-76x76@2x.png
│   │   │   │   │   └── Icon-App-83.5x83.5@2x.png
│   │   │   │   └── LaunchImage.imageset
│   │   │   │       ├── Contents.json
│   │   │   │       ├── LaunchImage@2x.png
│   │   │   │       ├── LaunchImage@3x.png
│   │   │   │       ├── LaunchImage.png
│   │   │   │       └── README.md
│   │   │   ├── Base.lproj
│   │   │   │   ├── LaunchScreen.storyboard
│   │   │   │   └── Main.storyboard
│   │   │   ├── GeneratedPluginRegistrant.h
│   │   │   ├── GeneratedPluginRegistrant.m
│   │   │   ├── Info.plist
│   │   │   └── Runner-Bridging-Header.h
│   │   ├── RunnerTests
│   │   │   └── RunnerTests.swift
│   │   ├── Runner.xcodeproj
│   │   │   ├── project.pbxproj
│   │   │   ├── project.xcworkspace
│   │   │   │   ├── contents.xcworkspacedata
│   │   │   │   └── xcshareddata
│   │   │   │       ├── IDEWorkspaceChecks.plist
│   │   │   │       └── WorkspaceSettings.xcsettings
│   │   │   └── xcshareddata
│   │   │       └── xcschemes
│   │   │           └── Runner.xcscheme
│   │   └── Runner.xcworkspace
│   │       ├── contents.xcworkspacedata
│   │       └── xcshareddata
│   │           ├── IDEWorkspaceChecks.plist
│   │           └── WorkspaceSettings.xcsettings
│   ├── lib
│   │   └── main.dart
│   ├── linux
│   │   ├── CMakeLists.txt
│   │   ├── flutter
│   │   │   ├── CMakeLists.txt
│   │   │   ├── generated_plugin_registrant.cc
│   │   │   ├── generated_plugin_registrant.h
│   │   │   └── generated_plugins.cmake
│   │   ├── main.cc
│   │   ├── my_application.cc
│   │   └── my_application.h
│   ├── macos
│   │   ├── Flutter
│   │   │   ├── ephemeral
│   │   │   │   ├── flutter_export_environment.sh
│   │   │   │   └── Flutter-Generated.xcconfig
│   │   │   ├── Flutter-Debug.xcconfig
│   │   │   ├── Flutter-Release.xcconfig
│   │   │   └── GeneratedPluginRegistrant.swift
│   │   ├── Runner
│   │   │   ├── AppDelegate.swift
│   │   │   ├── Assets.xcassets
│   │   │   │   └── AppIcon.appiconset
│   │   │   │       ├── app_icon_1024.png
│   │   │   │       ├── app_icon_128.png
│   │   │   │       ├── app_icon_16.png
│   │   │   │       ├── app_icon_256.png
│   │   │   │       ├── app_icon_32.png
│   │   │   │       ├── app_icon_512.png
│   │   │   │       ├── app_icon_64.png
│   │   │   │       └── Contents.json
│   │   │   ├── Base.lproj
│   │   │   │   └── MainMenu.xib
│   │   │   ├── Configs
│   │   │   │   ├── AppInfo.xcconfig
│   │   │   │   ├── Debug.xcconfig
│   │   │   │   ├── Release.xcconfig
│   │   │   │   └── Warnings.xcconfig
│   │   │   ├── DebugProfile.entitlements
│   │   │   ├── Info.plist
│   │   │   ├── MainFlutterWindow.swift
│   │   │   └── Release.entitlements
│   │   ├── RunnerTests
│   │   │   └── RunnerTests.swift
│   │   ├── Runner.xcodeproj
│   │   │   ├── project.pbxproj
│   │   │   ├── project.xcworkspace
│   │   │   │   └── xcshareddata
│   │   │   │       └── IDEWorkspaceChecks.plist
│   │   │   └── xcshareddata
│   │   │       └── xcschemes
│   │   │           └── Runner.xcscheme
│   │   └── Runner.xcworkspace
│   │       ├── contents.xcworkspacedata
│   │       └── xcshareddata
│   │           └── IDEWorkspaceChecks.plist
│   ├── mobile.iml
│   ├── pubspec.lock
│   ├── pubspec.yaml
│   ├── README.md
│   ├── test
│   │   └── widget_test.dart
│   ├── web
│   │   ├── favicon.png
│   │   ├── icons
│   │   │   ├── Icon-192.png
│   │   │   ├── Icon-512.png
│   │   │   ├── Icon-maskable-192.png
│   │   │   └── Icon-maskable-512.png
│   │   ├── index.html
│   │   └── manifest.json
│   └── windows
│       ├── CMakeLists.txt
│       ├── flutter
│       │   ├── CMakeLists.txt
│       │   ├── generated_plugin_registrant.cc
│       │   ├── generated_plugin_registrant.h
│       │   └── generated_plugins.cmake
│       └── runner
│           ├── CMakeLists.txt
│           ├── flutter_window.cpp
│           ├── flutter_window.h
│           ├── main.cpp
│           ├── resource.h
│           ├── resources
│           │   └── app_icon.ico
│           ├── runner.exe.manifest
│           ├── Runner.rc
│           ├── utils.cpp
│           ├── utils.h
│           ├── win32_window.cpp
│           └── win32_window.h
└── README.md

```

## Key Features

- **Student Management:**  Enroll new students, manage student profiles, track academic performance, manage attendance, generate ID cards, and provide access to student portals.
- **Teacher Management:** Assign teachers to classes, manage teacher profiles, track attendance, grade management, and provide access to teacher portals.
- **Academic Management:** Create and manage courses, schedule classes, manage lesson plans, and track student progress.
- **Event Management:** Schedule and manage school events, send notifications and reminders, and track event attendance.
- **Financial Management:** Manage fee payments, track financial transactions, manage budgeting, and generate financial reports.
- **Reporting and Analytics:** Generate comprehensive reports on various aspects of school operations, such as academic performance, attendance, and finances.  Provide data-driven insights to improve decision-making.
- **Communication and Collaboration:** Facilitate communication between all stakeholders (schools, administrators, teachers, students, parents) through internal messaging, notifications, and alerts.
- **Mobile App Integration:** Provide access to core EMS functionalities through a mobile app, offering convenience and accessibility for users on the go.
- **Role-Based Access Control:**  Implement a robust security system with role-based access control to ensure users can only access data and functionalities relevant to their roles.
- **Integration with External Systems:** Integrate with existing systems, such as SMS gateways, email services, and payment gateways, to enhance functionality and streamline workflows.

## Development Progress

The EMS project is currently under active development, with significant progress achieved in the following areas:

- **Backend Development:** The backend is built using Node.js and Express.js, with a database managed by MySQL.
- **Frontend Development:** The frontend is being developed using React.js, creating a responsive and user-friendly web application.
- **Database Design:**  Database tables have been designed to store and manage data for all key entities within the system.
- **User Authentication and Authorization:** Secure login mechanisms and role-based access control are implemented to ensure system security.
- **API Development:** RESTful APIs are being developed to enable communication between the frontend and backend, as well as potential integration with external systems.

## Contributing to the EMS Project

We welcome contributions from the developer community to improve the EMS and enhance its functionalities. If you are interested in contributing, please consider the following:

- **Fork the repository:** Create a fork of this repository on your GitHub account.
- **Create a branch:** Create a new branch for your changes.
- **Make changes:** Make your contributions and ensure that your code is well-documented and adheres to coding standards.
- **Create a pull request:** Submit a pull request to merge your changes into the main branch.

## Acknowledgements

This project is being developed with the support of the educational bureau of X City. We would like to thank them for their vision and commitment to improving education management in X City.

## Future Plans

Our future plans for the EMS include:

- **Expanding Functionality:** Implement additional features, such as advanced reporting and analytics, e-learning resources, and automated task management.
- **Improving User Experience:** Enhance the user interface and usability for all stakeholders.
- **Mobile App Development:**  Develop a fully functional mobile application that provides access to key EMS features on smartphones and tablets.
- **Integrating with Existing Systems:** Explore and implement integrations with other relevant systems and services used by educational institutions in X City.

This project is a continuous effort to improve educational management in X City. We are excited about the potential of the EMS to enhance efficiency, accessibility, and the overall quality of education in the region. 
