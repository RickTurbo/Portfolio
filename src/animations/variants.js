import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export const MotionButton = motion(Button);

export const MotionContainer = motion(Container);

export const MotionHeading = motion(Heading);

export const MotionBox = motion(Box);

export const MotionFlex = motion(Flex);

export const MotionGrid = motion(Grid);

export const MotionText = motion(Text);

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
};

export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
