import { mdiDatabaseArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseArrowRight(props: IconComponentProps) {
  return <Icon path={mdiDatabaseArrowRight} {...props} />;
}

export { mdiDatabaseArrowRight as path };
