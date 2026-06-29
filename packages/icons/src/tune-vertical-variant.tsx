import { mdiTuneVerticalVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TuneVerticalVariant(props: IconComponentProps) {
  return <Icon path={mdiTuneVerticalVariant} {...props} />;
}

export { mdiTuneVerticalVariant as path };
