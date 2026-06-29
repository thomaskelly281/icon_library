import { mdiUmbrellaOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UmbrellaOutline(props: IconComponentProps) {
  return <Icon path={mdiUmbrellaOutline} {...props} />;
}

export { mdiUmbrellaOutline as path };
