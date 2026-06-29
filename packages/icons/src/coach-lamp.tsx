import { mdiCoachLamp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CoachLamp(props: IconComponentProps) {
  return <Icon path={mdiCoachLamp} {...props} />;
}

export { mdiCoachLamp as path };
