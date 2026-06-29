import { mdiMultiplication } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Multiplication(props: IconComponentProps) {
  return <Icon path={mdiMultiplication} {...props} />;
}

export { mdiMultiplication as path };
