import { mdiRadioactive } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Radioactive(props: IconComponentProps) {
  return <Icon path={mdiRadioactive} {...props} />;
}

export { mdiRadioactive as path };
