import { mdiKnob } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Knob(props: IconComponentProps) {
  return <Icon path={mdiKnob} {...props} />;
}

export { mdiKnob as path };
