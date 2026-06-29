import { mdiBaseballBat } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BaseballBat(props: IconComponentProps) {
  return <Icon path={mdiBaseballBat} {...props} />;
}

export { mdiBaseballBat as path };
