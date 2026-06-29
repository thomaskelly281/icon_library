import { mdiRadioTower } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RadioTower(props: IconComponentProps) {
  return <Icon path={mdiRadioTower} {...props} />;
}

export { mdiRadioTower as path };
