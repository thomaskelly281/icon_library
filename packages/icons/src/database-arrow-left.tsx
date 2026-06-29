import { mdiDatabaseArrowLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseArrowLeft(props: IconComponentProps) {
  return <Icon path={mdiDatabaseArrowLeft} {...props} />;
}

export { mdiDatabaseArrowLeft as path };
