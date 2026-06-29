import { mdiBadminton } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Badminton(props: IconComponentProps) {
  return <Icon path={mdiBadminton} {...props} />;
}

export { mdiBadminton as path };
