import { mdiBookEducation } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookEducation(props: IconComponentProps) {
  return <Icon path={mdiBookEducation} {...props} />;
}

export { mdiBookEducation as path };
