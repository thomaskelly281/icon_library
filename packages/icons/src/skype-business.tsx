import { mdiSkypeBusiness } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SkypeBusiness(props: IconComponentProps) {
  return <Icon path={mdiSkypeBusiness} {...props} />;
}

export { mdiSkypeBusiness as path };
