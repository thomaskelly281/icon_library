import { mdiTune } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Tune(props: IconComponentProps) {
  return <Icon path={mdiTune} {...props} />;
}

export { mdiTune as path };
