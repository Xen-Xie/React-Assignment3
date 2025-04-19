import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { useNavigate, useLocation } from "react-router-dom";

function Navigates() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => {
    onOpenChange(false); // Close the drawer
    navigate(path);      // Navigate to the selected path
  };

  // Convert the current pathname to readable text
  const pathToText = (pathname) => {
    const segments = pathname
      .split("/")
      .filter((segment) => segment !== "" && segment !== "home"); // Exclude "home"

    if (segments.length === 0) return "Home";

    const formattedSegments = segments.map((seg) =>
      seg
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize each word
    );

    return `Home - ${formattedSegments.join(" - ")}`;
  };

  return (
    <>
      {/* Button with dynamic label */}
      <Button onPress={onOpen} variant="light">
        {pathToText(location.pathname)}
      </Button>

      {/* Left-side Drawer with blur effect */}
      <Drawer isOpen={isOpen} placement="left" onOpenChange={onOpenChange} className="font-roboto">
        <DrawerContent className="backdrop-blur-sm bg-white/70 shadow-lg border-r border-gray-200">
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">Navigate</DrawerHeader>

              <DrawerBody className="flex flex-col gap-3">
                <Button variant="light" onPress={() => handleNavigate("/home")}>
                  Home
                </Button>
                <Button variant="light" onPress={() => handleNavigate("/home/allrestaurent")}>
                  All Restaurants
                </Button>
                <Button variant="light" onPress={() => handleNavigate("/home/bellaitalia")}>
                  Bella Italia
                </Button>
              </DrawerBody>

              <DrawerFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navigates;
