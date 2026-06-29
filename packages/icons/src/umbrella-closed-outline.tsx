import { mdiUmbrellaClosedOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UmbrellaClosedOutline(props: IconComponentProps) {
  return <Icon path={mdiUmbrellaClosedOutline} {...props} />;
}

export { mdiUmbrellaClosedOutline as path };
