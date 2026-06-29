import { mdiMotion } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Motion(props: IconComponentProps) {
  return <Icon path={mdiMotion} {...props} />;
}

export { mdiMotion as path };
