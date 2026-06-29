import { mdiFlagTriangle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlagTriangle(props: IconComponentProps) {
  return <Icon path={mdiFlagTriangle} {...props} />;
}

export { mdiFlagTriangle as path };
