import { mdiTuneVertical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TuneVertical(props: IconComponentProps) {
  return <Icon path={mdiTuneVertical} {...props} />;
}

export { mdiTuneVertical as path };
