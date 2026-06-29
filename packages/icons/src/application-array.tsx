import { mdiApplicationArray } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ApplicationArray(props: IconComponentProps) {
  return <Icon path={mdiApplicationArray} {...props} />;
}

export { mdiApplicationArray as path };
