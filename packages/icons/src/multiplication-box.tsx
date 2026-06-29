import { mdiMultiplicationBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MultiplicationBox(props: IconComponentProps) {
  return <Icon path={mdiMultiplicationBox} {...props} />;
}

export { mdiMultiplicationBox as path };
