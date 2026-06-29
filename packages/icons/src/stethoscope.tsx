import { mdiStethoscope } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Stethoscope(props: IconComponentProps) {
  return <Icon path={mdiStethoscope} {...props} />;
}

export { mdiStethoscope as path };
