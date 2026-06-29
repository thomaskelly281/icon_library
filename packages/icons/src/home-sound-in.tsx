import { mdiHomeSoundIn } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeSoundIn(props: IconComponentProps) {
  return <Icon path={mdiHomeSoundIn} {...props} />;
}

export { mdiHomeSoundIn as path };
