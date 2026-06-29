import { mdiFunctionVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FunctionVariant(props: IconComponentProps) {
  return <Icon path={mdiFunctionVariant} {...props} />;
}

export { mdiFunctionVariant as path };
