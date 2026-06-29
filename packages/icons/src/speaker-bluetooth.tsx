import { mdiSpeakerBluetooth } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SpeakerBluetooth(props: IconComponentProps) {
  return <Icon path={mdiSpeakerBluetooth} {...props} />;
}

export { mdiSpeakerBluetooth as path };
