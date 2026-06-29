import { mdiEiffelTower } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EiffelTower(props: IconComponentProps) {
  return <Icon path={mdiEiffelTower} {...props} />;
}

export { mdiEiffelTower as path };
