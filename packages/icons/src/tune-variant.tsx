import { mdiTuneVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TuneVariant(props: IconComponentProps) {
  return <Icon path={mdiTuneVariant} {...props} />;
}

export { mdiTuneVariant as path };
