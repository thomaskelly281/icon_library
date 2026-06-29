import { mdiDatabaseArrowRightOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseArrowRightOutline(props: IconComponentProps) {
  return <Icon path={mdiDatabaseArrowRightOutline} {...props} />;
}

export { mdiDatabaseArrowRightOutline as path };
