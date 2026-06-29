import { mdiNumeric9Circle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Numeric9Circle(props: IconComponentProps) {
  return <Icon path={mdiNumeric9Circle} {...props} />;
}

export { mdiNumeric9Circle as path };
