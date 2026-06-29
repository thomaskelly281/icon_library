import { mdiTestTubeOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TestTubeOff(props: IconComponentProps) {
  return <Icon path={mdiTestTubeOff} {...props} />;
}

export { mdiTestTubeOff as path };
