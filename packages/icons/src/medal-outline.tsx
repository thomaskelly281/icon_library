import { mdiMedalOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MedalOutline(props: IconComponentProps) {
  return <Icon path={mdiMedalOutline} {...props} />;
}

export { mdiMedalOutline as path };
